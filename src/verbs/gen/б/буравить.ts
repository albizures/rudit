import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буравить: PerfectVerb = {
  name: Word('буравить', 3),
  singular1stPerson: Word('буравлю', 3),
  singular2ndPerson: Word('буравишь', 3),
  singular3rdPerson: Word('буравит', 3),
  plural1stPerson: Word('буравим', 3),
  plural2ndPerson: Word('буравите', 3),
  plural3rdPerson: Word('буравят', 3),
  masculinePast: Word('буравил', 3),
  femininePast: Word('буравила', 3),
  neuterPast: Word('буравило', 3),
  pluralPast: Word('буравили', 3),
  imperativeInformal: Word('буравь', 3),
  imperativeFormal: Word('буравьте', 3),
  imperfect: [],
};

perfectVerbs.set(буравить.name.text, буравить);

export { буравить };