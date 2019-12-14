import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const числить: PerfectVerb = {
  name: Word('числить', 1),
  singular1stPerson: Word('числю', 1),
  singular2ndPerson: Word('числишь', 1),
  singular3rdPerson: Word('числит', 1),
  plural1stPerson: Word('числим', 1),
  plural2ndPerson: Word('числите', 1),
  plural3rdPerson: Word('числят', 1),
  masculinePast: Word('числил', 1),
  femininePast: Word('числила', 1),
  neuterPast: Word('числило', 1),
  pluralPast: Word('числили', 1),
  imperativeInformal: Word('числи', 1),
  imperativeFormal: Word('числите', 1),
  imperfect: [],
};

perfectVerbs.set(числить.name.text, числить);

export { числить };