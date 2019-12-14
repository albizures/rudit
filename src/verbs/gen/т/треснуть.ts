import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const треснуть: PerfectVerb = {
  name: Word('треснуть', 2),
  singular1stPerson: Word('тресну', 2),
  singular2ndPerson: Word('треснешь', 2),
  singular3rdPerson: Word('треснет', 2),
  plural1stPerson: Word('треснем', 2),
  plural2ndPerson: Word('треснете', 2),
  plural3rdPerson: Word('треснут', 2),
  masculinePast: Word('треснул', 2),
  femininePast: Word('треснула', 2),
  neuterPast: Word('треснуло', 2),
  pluralPast: Word('треснули', 2),
  imperativeInformal: Word('тресни', 2),
  imperativeFormal: Word('тресните', 2),
  imperfect: [],
};

perfectVerbs.set(треснуть.name.text, треснуть);

export { треснуть };