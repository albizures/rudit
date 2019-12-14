import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объяснить: PerfectVerb = {
  name: Word('объяснить', 6),
  singular1stPerson: Word('объясню', 6),
  singular2ndPerson: Word('объяснишь', 6),
  singular3rdPerson: Word('объяснит', 6),
  plural1stPerson: Word('объясним', 6),
  plural2ndPerson: Word('объясните', 6),
  plural3rdPerson: Word('объяснят', 6),
  masculinePast: Word('объяснил', 6),
  femininePast: Word('объяснила', 6),
  neuterPast: Word('объяснило', 6),
  pluralPast: Word('объяснили', 6),
  imperativeInformal: Word('объясни', 6),
  imperativeFormal: Word('объясните', 6),
  imperfect: ['объяснять'],
};

perfectVerbs.set(объяснить.name.text, объяснить);

export { объяснить };