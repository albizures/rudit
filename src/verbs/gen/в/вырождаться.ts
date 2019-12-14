import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырождаться: PerfectVerb = {
  name: Word('вырождаться', 6),
  singular1stPerson: Word('вырождаюсь', 6),
  singular2ndPerson: Word('вырождаешься', 6),
  singular3rdPerson: Word('вырождается', 6),
  plural1stPerson: Word('вырождаемся', 6),
  plural2ndPerson: Word('вырождаетесь', 6),
  plural3rdPerson: Word('вырождаются', 6),
  masculinePast: Word('вырождался', 6),
  femininePast: Word('вырождалась', 6),
  neuterPast: Word('вырождалось', 6),
  pluralPast: Word('вырождались', 6),
  imperativeInformal: Word('вырождайся', 6),
  imperativeFormal: Word('вырождайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вырождаться.name.text, вырождаться);

export { вырождаться };