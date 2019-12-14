import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетащить: PerfectVerb = {
  name: Word('перетащить', 7),
  singular1stPerson: Word('перетащу', 7),
  singular2ndPerson: Word('перетащишь', 5),
  singular3rdPerson: Word('перетащит', 5),
  plural1stPerson: Word('перетащим', 5),
  plural2ndPerson: Word('перетащите', 5),
  plural3rdPerson: Word('перетащат', 5),
  masculinePast: Word('перетащил', 7),
  femininePast: Word('перетащила', 7),
  neuterPast: Word('перетащило', 7),
  pluralPast: Word('перетащили', 7),
  imperativeInformal: Word('перетащи', 7),
  imperativeFormal: Word('перетащите', 7),
  imperfect: [],
};

perfectVerbs.set(перетащить.name.text, перетащить);

export { перетащить };