import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздыматься: PerfectVerb = {
  name: Word('вздыматься', 5),
  singular1stPerson: Word('вздымаюсь', 5),
  singular2ndPerson: Word('вздымаешься', 5),
  singular3rdPerson: Word('вздымается', 5),
  plural1stPerson: Word('вздымаемся', 5),
  plural2ndPerson: Word('вздымаетесь', 5),
  plural3rdPerson: Word('вздымаются', 5),
  masculinePast: Word('вздымался', 5),
  femininePast: Word('вздымалась', 5),
  neuterPast: Word('вздымалось', 5),
  pluralPast: Word('вздымались', 5),
  imperativeInformal: Word('вздымайся', 5),
  imperativeFormal: Word('вздымайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вздыматься.name.text, вздыматься);

export { вздыматься };