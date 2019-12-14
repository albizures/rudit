import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыматься: PerfectVerb = {
  name: Word('подыматься', 5),
  singular1stPerson: Word('подымаюсь', 5),
  singular2ndPerson: Word('подымаешься', 5),
  singular3rdPerson: Word('подымается', 5),
  plural1stPerson: Word('подымаемся', 5),
  plural2ndPerson: Word('подымаетесь', 5),
  plural3rdPerson: Word('подымаются', 5),
  masculinePast: Word('подымался', 5),
  femininePast: Word('подымалась', 5),
  neuterPast: Word('подымалось', 5),
  pluralPast: Word('подымались', 5),
  imperativeInformal: Word('подымайся', 5),
  imperativeFormal: Word('подымайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подыматься.name.text, подыматься);

export { подыматься };