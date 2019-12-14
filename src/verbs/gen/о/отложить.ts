import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отложить: PerfectVerb = {
  name: Word('отложить', 5),
  singular1stPerson: Word('отложу', 5),
  singular2ndPerson: Word('отложишь', 3),
  singular3rdPerson: Word('отложит', 3),
  plural1stPerson: Word('отложим', 3),
  plural2ndPerson: Word('отложите', 3),
  plural3rdPerson: Word('отложат', 3),
  masculinePast: Word('отложил', 5),
  femininePast: Word('отложила', 5),
  neuterPast: Word('отложило', 5),
  pluralPast: Word('отложили', 5),
  imperativeInformal: Word('отложи', 5),
  imperativeFormal: Word('отложите', 5),
  imperfect: ['откладывать'],
};

perfectVerbs.set(отложить.name.text, отложить);

export { отложить };