import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вслушаться: PerfectVerb = {
  name: Word('вслушаться', 3),
  singular1stPerson: Word('вслушаюсь', 3),
  singular2ndPerson: Word('вслушаешься', 3),
  singular3rdPerson: Word('вслушается', 3),
  plural1stPerson: Word('вслушаемся', 3),
  plural2ndPerson: Word('вслушаетесь', 3),
  plural3rdPerson: Word('вслушаются', 3),
  masculinePast: Word('вслушался', 3),
  femininePast: Word('вслушалась', 3),
  neuterPast: Word('вслушалось', 3),
  pluralPast: Word('вслушались', 3),
  imperativeInformal: Word('вслушайся', 3),
  imperativeFormal: Word('вслушайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вслушаться.name.text, вслушаться);

export { вслушаться };