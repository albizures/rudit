import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уложить: PerfectVerb = {
  name: Word('уложить', 4),
  singular1stPerson: Word('уложу', 4),
  singular2ndPerson: Word('уложишь', 2),
  singular3rdPerson: Word('уложит', 2),
  plural1stPerson: Word('уложим', 2),
  plural2ndPerson: Word('уложите', 2),
  plural3rdPerson: Word('уложат', 2),
  masculinePast: Word('уложил', 4),
  femininePast: Word('уложила', 4),
  neuterPast: Word('уложило', 4),
  pluralPast: Word('уложили', 4),
  imperativeInformal: Word('уложи', 4),
  imperativeFormal: Word('уложите', 4),
  imperfect: ['укладывать'],
};

perfectVerbs.set(уложить.name.text, уложить);

export { уложить };