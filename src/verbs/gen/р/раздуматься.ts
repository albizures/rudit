import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздуматься: PerfectVerb = {
  name: Word('раздуматься', 4),
  singular1stPerson: Word('раздумаюсь', 4),
  singular2ndPerson: Word('раздумаешься', 4),
  singular3rdPerson: Word('раздумается', 4),
  plural1stPerson: Word('раздумаемся', 4),
  plural2ndPerson: Word('раздумаетесь', 4),
  plural3rdPerson: Word('раздумаются', 4),
  masculinePast: Word('раздумался', 4),
  femininePast: Word('раздумалась', 4),
  neuterPast: Word('раздумалось', 4),
  pluralPast: Word('раздумались', 4),
  imperativeInformal: Word('раздумайся', 4),
  imperativeFormal: Word('раздумайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раздуматься.name.text, раздуматься);

export { раздуматься };