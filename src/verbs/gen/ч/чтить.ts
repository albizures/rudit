import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чтить: PerfectVerb = {
  name: Word('чтить', 2),
  singular1stPerson: Word('чту', 2),
  singular2ndPerson: Word('чтишь', 2),
  singular3rdPerson: Word('чтит', 2),
  plural1stPerson: Word('чтим', 2),
  plural2ndPerson: Word('чтите', 2),
  plural3rdPerson: Word('чтят//чтут', 2),
  masculinePast: Word('чтил', 2),
  femininePast: Word('чтила', 2),
  neuterPast: Word('чтило', 2),
  pluralPast: Word('чтили', 2),
  imperativeInformal: Word('чти', 2),
  imperativeFormal: Word('чтите', 2),
  imperfect: [],
};

perfectVerbs.set(чтить.name.text, чтить);

export { чтить };