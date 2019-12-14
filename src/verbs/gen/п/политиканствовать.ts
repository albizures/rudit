import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const политиканствовать: PerfectVerb = {
  name: Word('политиканствовать', 7),
  singular1stPerson: Word('политиканствую', 7),
  singular2ndPerson: Word('политиканствуешь', 7),
  singular3rdPerson: Word('политиканствует', 7),
  plural1stPerson: Word('политиканствуем', 7),
  plural2ndPerson: Word('политиканствуете', 7),
  plural3rdPerson: Word('политиканствуют', 7),
  masculinePast: Word('политиканствовал', 7),
  femininePast: Word('политиканствовала', 7),
  neuterPast: Word('политиканствовало', 7),
  pluralPast: Word('политиканствовали', 7),
  imperativeInformal: Word('политиканствуй', 7),
  imperativeFormal: Word('политиканствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(политиканствовать.name.text, политиканствовать);

export { политиканствовать };