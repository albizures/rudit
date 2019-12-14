import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощутить: PerfectVerb = {
  name: Word('ощутить', 4),
  singular1stPerson: Word('ощущу', 4),
  singular2ndPerson: Word('ощутишь', 4),
  singular3rdPerson: Word('ощутит', 4),
  plural1stPerson: Word('ощутим', 4),
  plural2ndPerson: Word('ощутите', 4),
  plural3rdPerson: Word('ощутят', 4),
  masculinePast: Word('ощутил', 4),
  femininePast: Word('ощутила', 4),
  neuterPast: Word('ощутило', 4),
  pluralPast: Word('ощутили', 4),
  imperativeInformal: Word('ощути', 4),
  imperativeFormal: Word('ощутите', 4),
  imperfect: ['ощущать'],
};

perfectVerbs.set(ощутить.name.text, ощутить);

export { ощутить };