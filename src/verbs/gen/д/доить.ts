import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доить: PerfectVerb = {
  name: Word('доить', 2),
  singular1stPerson: Word('дою', 2),
  singular2ndPerson: Word('доишь', 1),
  singular3rdPerson: Word('доит', 1),
  plural1stPerson: Word('доим', 1),
  plural2ndPerson: Word('доите', 1),
  plural3rdPerson: Word('доят', 1),
  masculinePast: Word('доил', 2),
  femininePast: Word('доила', 2),
  neuterPast: Word('доило', 2),
  pluralPast: Word('доили', 2),
  imperativeInformal: Word('дои', 2),
  imperativeFormal: Word('доите', 2),
  imperfect: ['подоить'],
};

perfectVerbs.set(доить.name.text, доить);

export { доить };