import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрузить: PerfectVerb = {
  name: Word('выгрузить', 1),
  singular1stPerson: Word('выгружу', 1),
  singular2ndPerson: Word('выгрузишь', 1),
  singular3rdPerson: Word('выгрузит', 1),
  plural1stPerson: Word('выгрузим', 1),
  plural2ndPerson: Word('выгрузите', 1),
  plural3rdPerson: Word('выгрузят', 1),
  masculinePast: Word('выгрузил', 1),
  femininePast: Word('выгрузила', 1),
  neuterPast: Word('выгрузило', 1),
  pluralPast: Word('выгрузили', 1),
  imperativeInformal: Word('выгрузи', 1),
  imperativeFormal: Word('выгрузите', 1),
  imperfect: [],
};

perfectVerbs.set(выгрузить.name.text, выгрузить);

export { выгрузить };