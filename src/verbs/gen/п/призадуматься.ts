import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призадуматься: PerfectVerb = {
  name: Word('призадуматься', 6),
  singular1stPerson: Word('призадумаюсь', 6),
  singular2ndPerson: Word('призадумаешься', 6),
  singular3rdPerson: Word('призадумается', 6),
  plural1stPerson: Word('призадумаемся', 6),
  plural2ndPerson: Word('призадумаетесь', 6),
  plural3rdPerson: Word('призадумаются', 6),
  masculinePast: Word('призадумался', 6),
  femininePast: Word('призадумалась', 6),
  neuterPast: Word('призадумалось', 6),
  pluralPast: Word('призадумались', 6),
  imperativeInformal: Word('призадумайся', 6),
  imperativeFormal: Word('призадумайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(призадуматься.name.text, призадуматься);

export { призадуматься };