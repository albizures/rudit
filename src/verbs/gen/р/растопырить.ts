import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растопырить: PerfectVerb = {
  name: Word('растопырить', 6),
  singular1stPerson: Word('растопырю', 6),
  singular2ndPerson: Word('растопыришь', 6),
  singular3rdPerson: Word('растопырит', 6),
  plural1stPerson: Word('растопырим', 6),
  plural2ndPerson: Word('растопырите', 6),
  plural3rdPerson: Word('растопырят', 6),
  masculinePast: Word('растопырил', 6),
  femininePast: Word('растопырила', 6),
  neuterPast: Word('растопырило', 6),
  pluralPast: Word('растопырили', 6),
  imperativeInformal: Word('растопырь', 6),
  imperativeFormal: Word('растопырьте', 6),
  imperfect: [],
};

perfectVerbs.set(растопырить.name.text, растопырить);

export { растопырить };