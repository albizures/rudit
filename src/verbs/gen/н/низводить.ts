import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низводить: PerfectVerb = {
  name: Word('низводить', 6),
  singular1stPerson: Word('низвожу', 6),
  singular2ndPerson: Word('низводишь', 4),
  singular3rdPerson: Word('низводит', 4),
  plural1stPerson: Word('низводим', 4),
  plural2ndPerson: Word('низводите', 4),
  plural3rdPerson: Word('низводят', 4),
  masculinePast: Word('низводил', 6),
  femininePast: Word('низводила', 6),
  neuterPast: Word('низводило', 6),
  pluralPast: Word('низводили', 6),
  imperativeInformal: Word('низводи', 6),
  imperativeFormal: Word('низводите', 6),
  imperfect: [],
};

perfectVerbs.set(низводить.name.text, низводить);

export { низводить };