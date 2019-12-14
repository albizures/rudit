import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отравить: PerfectVerb = {
  name: Word('отравить', 5),
  singular1stPerson: Word('отравлю', 6),
  singular2ndPerson: Word('отравишь', 3),
  singular3rdPerson: Word('отравит', 3),
  plural1stPerson: Word('отравим', 3),
  plural2ndPerson: Word('отравите', 3),
  plural3rdPerson: Word('отравят', 3),
  masculinePast: Word('отравил', 5),
  femininePast: Word('отравила', 5),
  neuterPast: Word('отравило', 5),
  pluralPast: Word('отравили', 5),
  imperativeInformal: Word('отрави', 5),
  imperativeFormal: Word('отравите', 5),
  imperfect: [],
};

perfectVerbs.set(отравить.name.text, отравить);

export { отравить };