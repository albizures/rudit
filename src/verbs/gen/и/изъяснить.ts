import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъяснить: PerfectVerb = {
  name: Word('изъяснить', 6),
  singular1stPerson: Word('изъясню', 6),
  singular2ndPerson: Word('изъяснишь', 6),
  singular3rdPerson: Word('изъяснит', 6),
  plural1stPerson: Word('изъясним', 6),
  plural2ndPerson: Word('изъясните', 6),
  plural3rdPerson: Word('изъяснят', 6),
  masculinePast: Word('изъяснил', 6),
  femininePast: Word('изъяснила', 6),
  neuterPast: Word('изъяснило', 6),
  pluralPast: Word('изъяснили', 6),
  imperativeInformal: Word('изъясни', 6),
  imperativeFormal: Word('изъясните', 6),
  imperfect: [],
};

perfectVerbs.set(изъяснить.name.text, изъяснить);

export { изъяснить };