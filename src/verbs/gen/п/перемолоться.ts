import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемолоться: PerfectVerb = {
  name: Word('перемолоться', 7),
  singular1stPerson: Word('перемелюсь', 7),
  singular2ndPerson: Word('перемелешься', 5),
  singular3rdPerson: Word('перемелется', 5),
  plural1stPerson: Word('перемелемся', 5),
  plural2ndPerson: Word('перемелетесь', 5),
  plural3rdPerson: Word('перемелются', 5),
  masculinePast: Word('перемололся', 7),
  femininePast: Word('перемололась', 7),
  neuterPast: Word('перемололось', 7),
  pluralPast: Word('перемололись', 7),
  imperativeInformal: Word('перемелись', 7),
  imperativeFormal: Word('перемелитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемолоться.name.text, перемолоться);

export { перемолоться };