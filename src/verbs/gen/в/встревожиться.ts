import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встревожиться: PerfectVerb = {
  name: Word('встревожиться', 6),
  singular1stPerson: Word('встревожусь', 6),
  singular2ndPerson: Word('встревожишься', 6),
  singular3rdPerson: Word('встревожится', 6),
  plural1stPerson: Word('встревожимся', 6),
  plural2ndPerson: Word('встревожитесь', 6),
  plural3rdPerson: Word('встревожатся', 6),
  masculinePast: Word('встревожился', 6),
  femininePast: Word('встревожилась', 6),
  neuterPast: Word('встревожилось', 6),
  pluralPast: Word('встревожились', 6),
  imperativeInformal: Word('встревожься', 6),
  imperativeFormal: Word('встревожьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(встревожиться.name.text, встревожиться);

export { встревожиться };