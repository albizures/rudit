import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припутаться: PerfectVerb = {
  name: Word('припутаться', 4),
  singular1stPerson: Word('припутаюсь', 4),
  singular2ndPerson: Word('припутаешься', 4),
  singular3rdPerson: Word('припутается', 4),
  plural1stPerson: Word('припутаемся', 4),
  plural2ndPerson: Word('припутаетесь', 4),
  plural3rdPerson: Word('припутаются', 4),
  masculinePast: Word('припутался', 4),
  femininePast: Word('припуталась', 4),
  neuterPast: Word('припуталось', 4),
  pluralPast: Word('припутались', 4),
  imperativeInformal: Word('припутайся', 4),
  imperativeFormal: Word('припутайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(припутаться.name.text, припутаться);

export { припутаться };