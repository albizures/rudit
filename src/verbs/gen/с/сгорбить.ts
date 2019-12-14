import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгорбить: PerfectVerb = {
  name: Word('сгорбить', 2),
  singular1stPerson: Word('сгорблю', 2),
  singular2ndPerson: Word('сгорбишь', 2),
  singular3rdPerson: Word('сгорбит', 2),
  plural1stPerson: Word('сгорбим', 2),
  plural2ndPerson: Word('сгорбите', 2),
  plural3rdPerson: Word('сгорбят', 2),
  masculinePast: Word('сгорбил', 2),
  femininePast: Word('сгорбила', 2),
  neuterPast: Word('сгорбило', 2),
  pluralPast: Word('сгорбили', 2),
  imperativeInformal: Word('сгорби//сго'рбь', 2),
  imperativeFormal: Word('сгорбите//сго'рбьте', 2),
  imperfect: [],
};

perfectVerbs.set(сгорбить.name.text, сгорбить);

export { сгорбить };