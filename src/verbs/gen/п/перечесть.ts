import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечесть: PerfectVerb = {
  name: Word('перечесть', 5),
  singular1stPerson: Word('перечту', 1),
  singular2ndPerson: Word('перечтешь', 1),
  singular3rdPerson: Word('перечтет', 1),
  plural1stPerson: Word('перечтем', 1),
  plural2ndPerson: Word('перечтете', 1),
  plural3rdPerson: Word('перечтут', 1),
  masculinePast: Word('перечёл', 5),
  femininePast: Word('перёчла', 3),
  neuterPast: Word('перёчло', 3),
  pluralPast: Word('перёчли', 3),
  imperativeInformal: Word('перечти', 1),
  imperativeFormal: Word('перечтите', 1),
  imperfect: [],
};

perfectVerbs.set(перечесть.name.text, перечесть);

export { перечесть };