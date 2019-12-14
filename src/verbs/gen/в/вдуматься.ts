import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдуматься: PerfectVerb = {
  name: Word('вдуматься', 2),
  singular1stPerson: Word('вдумаюсь', 2),
  singular2ndPerson: Word('вдумаешься', 2),
  singular3rdPerson: Word('вдумается', 2),
  plural1stPerson: Word('вдумаемся', 2),
  plural2ndPerson: Word('вдумаетесь', 2),
  plural3rdPerson: Word('вдумаются', 2),
  masculinePast: Word('вдумался', 2),
  femininePast: Word('вдумалась', 2),
  neuterPast: Word('вдумалось', 2),
  pluralPast: Word('вдумались', 2),
  imperativeInformal: Word('вдумайся', 2),
  imperativeFormal: Word('вдумайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вдуматься.name.text, вдуматься);

export { вдуматься };