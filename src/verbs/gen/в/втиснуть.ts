import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втиснуть: PerfectVerb = {
  name: Word('втиснуть', 2),
  singular1stPerson: Word('втисну', 2),
  singular2ndPerson: Word('втиснешь', 2),
  singular3rdPerson: Word('втиснет', 2),
  plural1stPerson: Word('втиснем', 2),
  plural2ndPerson: Word('втиснете', 2),
  plural3rdPerson: Word('втиснут', 2),
  masculinePast: Word('втиснул', 2),
  femininePast: Word('втиснула', 2),
  neuterPast: Word('втиснуло', 2),
  pluralPast: Word('втиснули', 2),
  imperativeInformal: Word('втисни', 2),
  imperativeFormal: Word('втисните', 2),
  imperfect: [],
};

perfectVerbs.set(втиснуть.name.text, втиснуть);

export { втиснуть };