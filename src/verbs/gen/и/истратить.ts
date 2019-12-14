import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истратить: PerfectVerb = {
  name: Word('истратить', 4),
  singular1stPerson: Word('истрачу', 4),
  singular2ndPerson: Word('истратишь', 4),
  singular3rdPerson: Word('истратит', 4),
  plural1stPerson: Word('истратим', 4),
  plural2ndPerson: Word('истратите', 4),
  plural3rdPerson: Word('истратят', 4),
  masculinePast: Word('истратил', 4),
  femininePast: Word('истратила', 4),
  neuterPast: Word('истратило', 4),
  pluralPast: Word('истратили', 4),
  imperativeInformal: Word('истрать', 4),
  imperativeFormal: Word('истратьте', 4),
  imperfect: [],
};

perfectVerbs.set(истратить.name.text, истратить);

export { истратить };