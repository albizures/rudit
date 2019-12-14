import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const душить: PerfectVerb = {
  name: Word('душить', 3),
  singular1stPerson: Word('душу', 3),
  singular2ndPerson: Word('душишь', 1),
  singular3rdPerson: Word('душит', 1),
  plural1stPerson: Word('душим', 1),
  plural2ndPerson: Word('душите', 1),
  plural3rdPerson: Word('душат', 1),
  masculinePast: Word('душил', 3),
  femininePast: Word('душила', 3),
  neuterPast: Word('душило', 3),
  pluralPast: Word('душили', 3),
  imperativeInformal: Word('души', 3),
  imperativeFormal: Word('душите', 3),
  imperfect: ['задушить'],
};

perfectVerbs.set(душить.name.text, душить);

export { душить };