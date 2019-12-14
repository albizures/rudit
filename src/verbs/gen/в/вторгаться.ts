import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вторгаться: PerfectVerb = {
  name: Word('вторгаться', 5),
  singular1stPerson: Word('вторгаюсь', 5),
  singular2ndPerson: Word('вторгаешься', 5),
  singular3rdPerson: Word('вторгается', 5),
  plural1stPerson: Word('вторгаемся', 5),
  plural2ndPerson: Word('вторгаетесь', 5),
  plural3rdPerson: Word('вторгаются', 5),
  masculinePast: Word('вторгался', 5),
  femininePast: Word('вторгалась', 5),
  neuterPast: Word('вторгалось', 5),
  pluralPast: Word('вторгались', 5),
  imperativeInformal: Word('вторгайся', 5),
  imperativeFormal: Word('вторгайтесь', 5),
  imperfect: ['вторгнуться'],
};

perfectVerbs.set(вторгаться.name.text, вторгаться);

export { вторгаться };