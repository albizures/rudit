import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const робеть: PerfectVerb = {
  name: Word('робеть', 3),
  singular1stPerson: Word('робею', 3),
  singular2ndPerson: Word('робеешь', 3),
  singular3rdPerson: Word('робеет', 3),
  plural1stPerson: Word('робеем', 3),
  plural2ndPerson: Word('робеете', 3),
  plural3rdPerson: Word('робеют', 3),
  masculinePast: Word('робел', 3),
  femininePast: Word('робела', 3),
  neuterPast: Word('робело', 3),
  pluralPast: Word('робели', 3),
  imperativeInformal: Word('робей', 3),
  imperativeFormal: Word('робейте', 3),
  imperfect: [],
};

perfectVerbs.set(робеть.name.text, робеть);

export { робеть };