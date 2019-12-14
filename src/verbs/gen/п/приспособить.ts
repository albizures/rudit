import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспособить: PerfectVerb = {
  name: Word('приспособить', 7),
  singular1stPerson: Word('приспособлю', 7),
  singular2ndPerson: Word('приспособишь', 7),
  singular3rdPerson: Word('приспособит', 7),
  plural1stPerson: Word('приспособим', 7),
  plural2ndPerson: Word('приспособите', 7),
  plural3rdPerson: Word('приспособят', 7),
  masculinePast: Word('приспособил', 7),
  femininePast: Word('приспособила', 7),
  neuterPast: Word('приспособило', 7),
  pluralPast: Word('приспособили', 7),
  imperativeInformal: Word('приспособь', 7),
  imperativeFormal: Word('приспособьте', 7),
  imperfect: ['приспосабливать'],
};

perfectVerbs.set(приспособить.name.text, приспособить);

export { приспособить };