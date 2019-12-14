import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырезаться: PerfectVerb = {
  name: Word('вырезаться', 5),
  singular1stPerson: Word('вырезаюсь', 5),
  singular2ndPerson: Word('вырезаешься', 5),
  singular3rdPerson: Word('вырезается', 5),
  plural1stPerson: Word('вырезаемся', 5),
  plural2ndPerson: Word('вырезаетесь', 5),
  plural3rdPerson: Word('вырезаются', 5),
  masculinePast: Word('вырезался', 5),
  femininePast: Word('вырезалась', 5),
  neuterPast: Word('вырезалось', 5),
  pluralPast: Word('вырезались', 5),
  imperativeInformal: Word('вырезайся', 5),
  imperativeFormal: Word('вырезайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вырезаться.name.text, вырезаться);

export { вырезаться };