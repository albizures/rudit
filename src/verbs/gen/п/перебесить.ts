import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебесить: PerfectVerb = {
  name: Word('перебесить', 7),
  singular1stPerson: Word('перебешу', 7),
  singular2ndPerson: Word('перебесишь', 5),
  singular3rdPerson: Word('перебесит', 5),
  plural1stPerson: Word('перебесим', 5),
  plural2ndPerson: Word('перебесите', 5),
  plural3rdPerson: Word('перебесят', 5),
  masculinePast: Word('перебесил', 7),
  femininePast: Word('перебесила', 7),
  neuterPast: Word('перебесило', 7),
  pluralPast: Word('перебесили', 7),
  imperativeInformal: Word('перебеси', 7),
  imperativeFormal: Word('перебесите', 7),
  imperfect: [],
};

perfectVerbs.set(перебесить.name.text, перебесить);

export { перебесить };