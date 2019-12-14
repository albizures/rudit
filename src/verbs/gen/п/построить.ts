import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const построить: PerfectVerb = {
  name: Word('построить', 5),
  singular1stPerson: Word('построю', 5),
  singular2ndPerson: Word('построишь', 5),
  singular3rdPerson: Word('построит', 5),
  plural1stPerson: Word('построим', 5),
  plural2ndPerson: Word('построите', 5),
  plural3rdPerson: Word('построят', 5),
  masculinePast: Word('построил', 5),
  femininePast: Word('построила', 5),
  neuterPast: Word('построило', 5),
  pluralPast: Word('построили', 5),
  imperativeInformal: Word('построй', 5),
  imperativeFormal: Word('постройте', 5),
  imperfect: ['строить'],
};

perfectVerbs.set(построить.name.text, построить);

export { построить };