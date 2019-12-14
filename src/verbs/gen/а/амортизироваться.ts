import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const амортизироваться: PerfectVerb = {
  name: Word('амортизироваться', 7),
  singular1stPerson: Word('амортизируюсь', 7),
  singular2ndPerson: Word('амортизируешься', 7),
  singular3rdPerson: Word('амортизируется', 7),
  plural1stPerson: Word('амортизируемся', 7),
  plural2ndPerson: Word('амортизируетесь', 7),
  plural3rdPerson: Word('амортизируются', 7),
  masculinePast: Word('амортизировался', 7),
  femininePast: Word('амортизировалась', 7),
  neuterPast: Word('амортизировалось', 7),
  pluralPast: Word('амортизировались', 7),
  imperativeInformal: Word('амортизируйся', 7),
  imperativeFormal: Word('амортизируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(амортизироваться.name.text, амортизироваться);

export { амортизироваться };