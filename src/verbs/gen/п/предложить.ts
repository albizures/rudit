import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предложить: PerfectVerb = {
  name: Word('предложить', 7),
  singular1stPerson: Word('предложу', 7),
  singular2ndPerson: Word('предложишь', 5),
  singular3rdPerson: Word('предложит', 5),
  plural1stPerson: Word('предложим', 5),
  plural2ndPerson: Word('предложите', 5),
  plural3rdPerson: Word('предложат', 5),
  masculinePast: Word('предложил', 7),
  femininePast: Word('предложила', 7),
  neuterPast: Word('предложило', 7),
  pluralPast: Word('предложили', 7),
  imperativeInformal: Word('предложи', 7),
  imperativeFormal: Word('предложите', 7),
  imperfect: ['предлагать'],
};

perfectVerbs.set(предложить.name.text, предложить);

export { предложить };