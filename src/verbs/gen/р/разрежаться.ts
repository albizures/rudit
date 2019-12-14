import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрежаться: PerfectVerb = {
  name: Word('разрежаться', 6),
  singular1stPerson: Word('разрежаюсь', 6),
  singular2ndPerson: Word('разрежаешься', 6),
  singular3rdPerson: Word('разрежается', 6),
  plural1stPerson: Word('разрежаемся', 6),
  plural2ndPerson: Word('разрежаетесь', 6),
  plural3rdPerson: Word('разрежаются', 6),
  masculinePast: Word('разрежался', 6),
  femininePast: Word('разрежалась', 6),
  neuterPast: Word('разрежалось', 6),
  pluralPast: Word('разрежались', 6),
  imperativeInformal: Word('разрежайся', 6),
  imperativeFormal: Word('разрежайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрежаться.name.text, разрежаться);

export { разрежаться };