import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выяснить: PerfectVerb = {
  name: Word('выяснить', 1),
  singular1stPerson: Word('выясню', 1),
  singular2ndPerson: Word('выяснишь', 1),
  singular3rdPerson: Word('выяснит', 1),
  plural1stPerson: Word('выясним', 1),
  plural2ndPerson: Word('выясните', 1),
  plural3rdPerson: Word('выяснят', 1),
  masculinePast: Word('выяснил', 1),
  femininePast: Word('выяснила', 1),
  neuterPast: Word('выяснило', 1),
  pluralPast: Word('выяснили', 1),
  imperativeInformal: Word('выясни', 1),
  imperativeFormal: Word('выясните', 1),
  imperfect: ['выяснять'],
};

perfectVerbs.set(выяснить.name.text, выяснить);

export { выяснить };