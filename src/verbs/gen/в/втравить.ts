import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втравить: PerfectVerb = {
  name: Word('втравить', 5),
  singular1stPerson: Word('втравлю', 6),
  singular2ndPerson: Word('втравишь', 3),
  singular3rdPerson: Word('втравит', 3),
  plural1stPerson: Word('втравим', 3),
  plural2ndPerson: Word('втравите', 3),
  plural3rdPerson: Word('втравят', 3),
  masculinePast: Word('втравил', 5),
  femininePast: Word('втравила', 5),
  neuterPast: Word('втравило', 5),
  pluralPast: Word('втравили', 5),
  imperativeInformal: Word('втрави', 5),
  imperativeFormal: Word('втравите', 5),
  imperfect: [],
};

perfectVerbs.set(втравить.name.text, втравить);

export { втравить };