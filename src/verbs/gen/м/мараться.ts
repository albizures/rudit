import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мараться: PerfectVerb = {
  name: Word('мараться', 3),
  singular1stPerson: Word('мараюсь', 3),
  singular2ndPerson: Word('мараешься', 3),
  singular3rdPerson: Word('марается', 3),
  plural1stPerson: Word('мараемся', 3),
  plural2ndPerson: Word('мараетесь', 3),
  plural3rdPerson: Word('мараются', 3),
  masculinePast: Word('марался', 3),
  femininePast: Word('маралась', 3),
  neuterPast: Word('маралось', 3),
  pluralPast: Word('марались', 3),
  imperativeInformal: Word('марайся', 3),
  imperativeFormal: Word('марайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(мараться.name.text, мараться);

export { мараться };