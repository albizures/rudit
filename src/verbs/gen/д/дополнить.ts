import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дополнить: PerfectVerb = {
  name: Word('дополнить', 3),
  singular1stPerson: Word('дополню', 3),
  singular2ndPerson: Word('дополнишь', 3),
  singular3rdPerson: Word('дополнит', 3),
  plural1stPerson: Word('дополним', 3),
  plural2ndPerson: Word('дополните', 3),
  plural3rdPerson: Word('дополнят', 3),
  masculinePast: Word('дополнил', 3),
  femininePast: Word('дополнила', 3),
  neuterPast: Word('дополнило', 3),
  pluralPast: Word('дополнили', 3),
  imperativeInformal: Word('дополни', 3),
  imperativeFormal: Word('дополните', 3),
  imperfect: ['дополнять'],
};

perfectVerbs.set(дополнить.name.text, дополнить);

export { дополнить };