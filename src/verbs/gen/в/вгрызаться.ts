import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вгрызаться: PerfectVerb = {
  name: Word('вгрызаться', 5),
  singular1stPerson: Word('вгрызаюсь', 5),
  singular2ndPerson: Word('вгрызаешься', 5),
  singular3rdPerson: Word('вгрызается', 5),
  plural1stPerson: Word('вгрызаемся', 5),
  plural2ndPerson: Word('вгрызаетесь', 5),
  plural3rdPerson: Word('вгрызаются', 5),
  masculinePast: Word('вгрызался', 5),
  femininePast: Word('вгрызалась', 5),
  neuterPast: Word('вгрызалось', 5),
  pluralPast: Word('вгрызались', 5),
  imperativeInformal: Word('вгрызайся', 5),
  imperativeFormal: Word('вгрызайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вгрызаться.name.text, вгрызаться);

export { вгрызаться };