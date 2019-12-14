import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уметь: PerfectVerb = {
  name: Word('уметь', 2),
  singular1stPerson: Word('умею', 2),
  singular2ndPerson: Word('умеешь', 2),
  singular3rdPerson: Word('умеет', 2),
  plural1stPerson: Word('умеем', 2),
  plural2ndPerson: Word('умеете', 2),
  plural3rdPerson: Word('умеют', 2),
  masculinePast: Word('умел', 2),
  femininePast: Word('умела', 2),
  neuterPast: Word('умело', 2),
  pluralPast: Word('умели', 2),
  imperativeInformal: Word('умей', 2),
  imperativeFormal: Word('умейте', 2),
  imperfect: ['суметь'],
};

perfectVerbs.set(уметь.name.text, уметь);

export { уметь };