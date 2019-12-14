import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объединить: PerfectVerb = {
  name: Word('объединить', 7),
  singular1stPerson: Word('объединю', 7),
  singular2ndPerson: Word('объединишь', 7),
  singular3rdPerson: Word('объединит', 7),
  plural1stPerson: Word('объединим', 7),
  plural2ndPerson: Word('объедините', 7),
  plural3rdPerson: Word('объединят', 7),
  masculinePast: Word('объединил', 7),
  femininePast: Word('объединила', 7),
  neuterPast: Word('объединило', 7),
  pluralPast: Word('объединили', 7),
  imperativeInformal: Word('объедини', 7),
  imperativeFormal: Word('объедините', 7),
  imperfect: ['объединять'],
};

perfectVerbs.set(объединить.name.text, объединить);

export { объединить };