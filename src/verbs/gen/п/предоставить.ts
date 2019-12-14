import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предоставить: PerfectVerb = {
  name: Word('предоставить', 7),
  singular1stPerson: Word('предоставлю', 7),
  singular2ndPerson: Word('предоставишь', 7),
  singular3rdPerson: Word('предоставит', 7),
  plural1stPerson: Word('предоставим', 7),
  plural2ndPerson: Word('предоставите', 7),
  plural3rdPerson: Word('предоставят', 7),
  masculinePast: Word('предоставил', 7),
  femininePast: Word('предоставила', 7),
  neuterPast: Word('предоставило', 7),
  pluralPast: Word('предоставили', 7),
  imperativeInformal: Word('предоставь', 7),
  imperativeFormal: Word('предоставьте', 7),
  imperfect: ['предоставлять'],
};

perfectVerbs.set(предоставить.name.text, предоставить);

export { предоставить };