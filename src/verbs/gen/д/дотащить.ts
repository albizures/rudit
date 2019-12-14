import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотащить: PerfectVerb = {
  name: Word('дотащить', 5),
  singular1stPerson: Word('дотащу', 5),
  singular2ndPerson: Word('дотащишь', 3),
  singular3rdPerson: Word('дотащит', 3),
  plural1stPerson: Word('дотащим', 3),
  plural2ndPerson: Word('дотащите', 3),
  plural3rdPerson: Word('дотащат', 3),
  masculinePast: Word('дотащил', 5),
  femininePast: Word('дотащила', 5),
  neuterPast: Word('дотащило', 5),
  pluralPast: Word('дотащили', 5),
  imperativeInformal: Word('дотащи', 5),
  imperativeFormal: Word('дотащите', 5),
  imperfect: [],
};

perfectVerbs.set(дотащить.name.text, дотащить);

export { дотащить };