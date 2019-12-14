import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекатываться: PerfectVerb = {
  name: Word('перекатываться', 5),
  singular1stPerson: Word('перекатываюсь', 5),
  singular2ndPerson: Word('перекатываешься', 5),
  singular3rdPerson: Word('перекатывается', 5),
  plural1stPerson: Word('перекатываемся', 5),
  plural2ndPerson: Word('перекатываетесь', 5),
  plural3rdPerson: Word('перекатываются', 5),
  masculinePast: Word('перекатывался', 5),
  femininePast: Word('перекатывалась', 5),
  neuterPast: Word('перекатывалось', 5),
  pluralPast: Word('перекатывались', 5),
  imperativeInformal: Word('перекатывайся', 5),
  imperativeFormal: Word('перекатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перекатываться.name.text, перекатываться);

export { перекатываться };