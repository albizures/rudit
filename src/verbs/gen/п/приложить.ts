import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приложить: PerfectVerb = {
  name: Word('приложить', 6),
  singular1stPerson: Word('приложу', 6),
  singular2ndPerson: Word('приложишь', 4),
  singular3rdPerson: Word('приложит', 4),
  plural1stPerson: Word('приложим', 4),
  plural2ndPerson: Word('приложите', 4),
  plural3rdPerson: Word('приложат', 4),
  masculinePast: Word('приложил', 6),
  femininePast: Word('приложила', 6),
  neuterPast: Word('приложило', 6),
  pluralPast: Word('приложили', 6),
  imperativeInformal: Word('приложи', 6),
  imperativeFormal: Word('приложите', 6),
  imperfect: ['прикладывать'],
};

perfectVerbs.set(приложить.name.text, приложить);

export { приложить };