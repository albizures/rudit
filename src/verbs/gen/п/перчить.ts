import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перчить: PerfectVerb = {
  name: Word('перчить', 1),
  singular1stPerson: Word('перчу', 1),
  singular2ndPerson: Word('перчишь', 1),
  singular3rdPerson: Word('перчит', 1),
  plural1stPerson: Word('перчим', 1),
  plural2ndPerson: Word('перчите', 1),
  plural3rdPerson: Word('перчат', 1),
  masculinePast: Word('перчил', 1),
  femininePast: Word('перчила', 1),
  neuterPast: Word('перчило', 1),
  pluralPast: Word('перчили', 1),
  imperativeInformal: Word('перчи', 1),
  imperativeFormal: Word('перчите', 1),
  imperfect: [],
};

perfectVerbs.set(перчить.name.text, перчить);

export { перчить };