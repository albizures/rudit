import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заложить: PerfectVerb = {
  name: Word('заложить', 5),
  singular1stPerson: Word('заложу', 5),
  singular2ndPerson: Word('заложишь', 3),
  singular3rdPerson: Word('заложит', 3),
  plural1stPerson: Word('заложим', 3),
  plural2ndPerson: Word('заложите', 3),
  plural3rdPerson: Word('заложат', 3),
  masculinePast: Word('заложил', 5),
  femininePast: Word('заложила', 5),
  neuterPast: Word('заложило', 5),
  pluralPast: Word('заложили', 5),
  imperativeInformal: Word('заложи', 5),
  imperativeFormal: Word('заложите', 5),
  imperfect: ['закладывать'],
};

perfectVerbs.set(заложить.name.text, заложить);

export { заложить };