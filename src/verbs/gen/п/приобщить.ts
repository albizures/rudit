import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобщить: PerfectVerb = {
  name: Word('приобщить', 6),
  singular1stPerson: Word('приобщу', 6),
  singular2ndPerson: Word('приобщишь', 6),
  singular3rdPerson: Word('приобщит', 6),
  plural1stPerson: Word('приобщим', 6),
  plural2ndPerson: Word('приобщите', 6),
  plural3rdPerson: Word('приобщат', 6),
  masculinePast: Word('приобщил', 6),
  femininePast: Word('приобщила', 6),
  neuterPast: Word('приобщило', 6),
  pluralPast: Word('приобщили', 6),
  imperativeInformal: Word('приобщи', 6),
  imperativeFormal: Word('приобщите', 6),
  imperfect: [],
};

perfectVerbs.set(приобщить.name.text, приобщить);

export { приобщить };